import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Plus, Pencil, Trash2, Eye, EyeOff, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import AdminLayout from '@/components/admin/AdminLayout';
import { useLanguage } from '@/contexts/LanguageContext';

interface DepartmentItem {
  id: string;
  name_uz: string;
  name_ru: string;
  name_en: string;
  description_uz: string;
  description_ru: string;
  description_en: string;
  icon: string | null;
  published: boolean | null;
  created_at: string;
}

const DepartmentsAdmin: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<DepartmentItem | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const { toast } = useToast();
  const { language } = useLanguage();
  const queryClient = useQueryClient();

  const { data: departments, isLoading } = useQuery({
    queryKey: ['admin-departments'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('departments')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as DepartmentItem[];
    },
  });

  const saveMutation = useMutation({
    mutationFn: async (item: Partial<DepartmentItem>) => {
      if (editingItem?.id) {
        const { error } = await supabase
          .from('departments')
          .update(item)
          .eq('id', editingItem.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('departments').insert([item]);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-departments'] });
      setDialogOpen(false);
      setEditingItem(null);
      toast({
        title: 'Muvaffaqiyatli!',
        description: editingItem ? 'Bo\'lim yangilandi' : 'Bo\'lim qo\'shildi',
      });
    },
    onError: (error: Error) => {
      toast({
        variant: 'destructive',
        title: 'Xatolik',
        description: error.message,
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('departments').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-departments'] });
      setDeleteDialogOpen(false);
      setDeletingId(null);
      toast({
        title: 'O\'chirildi',
        description: 'Bo\'lim o\'chirildi',
      });
    },
  });

  const togglePublished = useMutation({
    mutationFn: async ({ id, published }: { id: string; published: boolean }) => {
      const { error } = await supabase
        .from('departments')
        .update({ published })
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-departments'] });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const item = {
      name_uz: formData.get('name_uz') as string,
      name_ru: formData.get('name_ru') as string,
      name_en: formData.get('name_en') as string,
      description_uz: formData.get('description_uz') as string,
      description_ru: formData.get('description_ru') as string,
      description_en: formData.get('description_en') as string,
      icon: formData.get('icon') as string || 'BookOpen',
      published: formData.get('published') === 'on',
    };

    saveMutation.mutate(item);
  };

  const getName = (item: DepartmentItem) => {
    if (language === 'uz') return item.name_uz;
    if (language === 'ru') return item.name_ru;
    return item.name_en;
  };

  const getDescription = (item: DepartmentItem) => {
    if (language === 'uz') return item.description_uz;
    if (language === 'ru') return item.description_ru;
    return item.description_en;
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-display font-bold">Bo'limlar</h1>
            <p className="text-muted-foreground">Bo'limlar boshqaruvi</p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => setEditingItem(null)}>
                <Plus className="w-4 h-4 mr-2" />
                Qo'shish
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingItem ? 'Bo\'limni tahrirlash' : 'Yangi bo\'lim'}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name_uz">Nomi (UZ)</Label>
                    <Input
                      id="name_uz"
                      name="name_uz"
                      defaultValue={editingItem?.name_uz}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name_ru">Nomi (RU)</Label>
                    <Input
                      id="name_ru"
                      name="name_ru"
                      defaultValue={editingItem?.name_ru}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name_en">Nomi (EN)</Label>
                    <Input
                      id="name_en"
                      name="name_en"
                      defaultValue={editingItem?.name_en}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description_uz">Tavsif (UZ)</Label>
                  <Textarea
                    id="description_uz"
                    name="description_uz"
                    rows={3}
                    defaultValue={editingItem?.description_uz}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description_ru">Tavsif (RU)</Label>
                  <Textarea
                    id="description_ru"
                    name="description_ru"
                    rows={3}
                    defaultValue={editingItem?.description_ru}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description_en">Tavsif (EN)</Label>
                  <Textarea
                    id="description_en"
                    name="description_en"
                    rows={3}
                    defaultValue={editingItem?.description_en}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icon">Icon nomi (Lucide)</Label>
                  <Input
                    id="icon"
                    name="icon"
                    defaultValue={editingItem?.icon || 'BookOpen'}
                    placeholder="BookOpen, Calculator, Atom..."
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Switch
                    id="published"
                    name="published"
                    defaultChecked={editingItem?.published ?? false}
                  />
                  <Label htmlFor="published">Nashr qilish</Label>
                </div>

                <div className="flex justify-end gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setDialogOpen(false)}
                  >
                    Bekor qilish
                  </Button>
                  <Button type="submit" disabled={saveMutation.isPending}>
                    {saveMutation.isPending && (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    )}
                    Saqlash
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {departments?.map((item) => (
              <Card key={item.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        📚
                      </div>
                      <CardTitle className="text-lg">{getName(item)}</CardTitle>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        togglePublished.mutate({
                          id: item.id,
                          published: !item.published,
                        })
                      }
                    >
                      {item.published ? (
                        <Eye className="w-4 h-4 text-green-500" />
                      ) : (
                        <EyeOff className="w-4 h-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {getDescription(item)}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setEditingItem(item);
                        setDialogOpen(true);
                      }}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setDeletingId(item.id);
                        setDeleteDialogOpen(true);
                      }}
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>O'chirishni tasdiqlaysizmi?</AlertDialogTitle>
              <AlertDialogDescription>
                Bu amalni qaytarib bo'lmaydi. Bo'lim butunlay o'chiriladi.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Bekor qilish</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => deletingId && deleteMutation.mutate(deletingId)}
              >
                O'chirish
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </AdminLayout>
  );
};

export default DepartmentsAdmin;
