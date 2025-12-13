import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Plus, Pencil, Trash2, Eye, EyeOff, Loader2, MapPin, Calendar } from 'lucide-react';
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

interface EventItem {
  id: string;
  title_uz: string;
  title_ru: string;
  title_en: string;
  description_uz: string;
  description_ru: string;
  description_en: string;
  event_date: string;
  location: string | null;
  image_url: string | null;
  published: boolean | null;
  created_at: string;
}

const EventsAdmin: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<EventItem | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const { toast } = useToast();
  const { language } = useLanguage();
  const queryClient = useQueryClient();

  const { data: events, isLoading } = useQuery({
    queryKey: ['admin-events'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('event_date', { ascending: false });

      if (error) throw error;
      return data as EventItem[];
    },
  });

  const saveMutation = useMutation({
    mutationFn: async (item: Partial<EventItem>) => {
      if (editingItem?.id) {
        const { error } = await supabase
          .from('events')
          .update(item)
          .eq('id', editingItem.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('events').insert([item]);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-events'] });
      setDialogOpen(false);
      setEditingItem(null);
      toast({
        title: 'Muvaffaqiyatli!',
        description: editingItem ? 'Tadbir yangilandi' : 'Tadbir qo\'shildi',
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
      const { error } = await supabase.from('events').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-events'] });
      setDeleteDialogOpen(false);
      setDeletingId(null);
      toast({
        title: 'O\'chirildi',
        description: 'Tadbir o\'chirildi',
      });
    },
  });

  const togglePublished = useMutation({
    mutationFn: async ({ id, published }: { id: string; published: boolean }) => {
      const { error } = await supabase
        .from('events')
        .update({ published })
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-events'] });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const item = {
      title_uz: formData.get('title_uz') as string,
      title_ru: formData.get('title_ru') as string,
      title_en: formData.get('title_en') as string,
      description_uz: formData.get('description_uz') as string,
      description_ru: formData.get('description_ru') as string,
      description_en: formData.get('description_en') as string,
      event_date: formData.get('event_date') as string,
      location: formData.get('location') as string || null,
      image_url: formData.get('image_url') as string || null,
      published: formData.get('published') === 'on',
    };

    saveMutation.mutate(item);
  };

  const getTitle = (item: EventItem) => {
    if (language === 'uz') return item.title_uz;
    if (language === 'ru') return item.title_ru;
    return item.title_en;
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-display font-bold">Tadbirlar</h1>
            <p className="text-muted-foreground">Tadbirlar boshqaruvi</p>
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
                  {editingItem ? 'Tadbirni tahrirlash' : 'Yangi tadbir'}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title_uz">Sarlavha (UZ)</Label>
                    <Input
                      id="title_uz"
                      name="title_uz"
                      defaultValue={editingItem?.title_uz}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title_ru">Sarlavha (RU)</Label>
                    <Input
                      id="title_ru"
                      name="title_ru"
                      defaultValue={editingItem?.title_ru}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title_en">Sarlavha (EN)</Label>
                    <Input
                      id="title_en"
                      name="title_en"
                      defaultValue={editingItem?.title_en}
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="event_date">Sana</Label>
                    <Input
                      id="event_date"
                      name="event_date"
                      type="datetime-local"
                      defaultValue={editingItem?.event_date?.slice(0, 16)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Joylashuv</Label>
                    <Input
                      id="location"
                      name="location"
                      defaultValue={editingItem?.location || ''}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image_url">Rasm URL</Label>
                  <Input
                    id="image_url"
                    name="image_url"
                    defaultValue={editingItem?.image_url || ''}
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
            {events?.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                {item.image_url && (
                  <img
                    src={item.image_url}
                    alt={getTitle(item)}
                    className="w-full h-40 object-cover"
                  />
                )}
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg line-clamp-2">
                      {getTitle(item)}
                    </CardTitle>
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
                  <div className="space-y-1 text-sm text-muted-foreground mb-4">
                    <p className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(item.event_date).toLocaleDateString()}
                    </p>
                    {item.location && (
                      <p className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </p>
                    )}
                  </div>
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
                Bu amalni qaytarib bo'lmaydi. Tadbir butunlay o'chiriladi.
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

export default EventsAdmin;
