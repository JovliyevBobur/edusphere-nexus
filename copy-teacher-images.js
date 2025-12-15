import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create public/teachers directory if it doesn't exist
const publicTeachersDir = path.join(__dirname, 'public', 'teachers');
if (!fs.existsSync(publicTeachersDir)) {
  fs.mkdirSync(publicTeachersDir, { recursive: true });
  console.log('Created public/teachers directory');
}

// Copy images
const imagesToCopy = [
  { src: 'teachers/biologiya.jpg', dest: 'public/teachers/biologiya.jpg' },
  { src: 'teachers/biologiya2.jpg', dest: 'public/teachers/biologiya2.jpg' },
  { src: 'teachers/kotiba.jpg', dest: 'public/teachers/kotiba.jpg' },
  { src: 'teachers/matematika5.png', dest: 'public/teachers/matematika5.png' },
  { src: 'teachers/matematika2.jpg', dest: 'public/teachers/matematika2.jpg' },
  { src: 'teachers/matematika4.png', dest: 'public/teachers/matematika4.png' },
  { src: 'teachers/matematika3.jpg', dest: 'public/teachers/matematika3.jpg' },
  { src: 'teachers/matematika.jpg', dest: 'public/teachers/matematika.jpg' },
  { src: 'teachers/matematika6.jpg', dest: 'public/teachers/matematika6.jpg' },
  { src: 'teachers/fizika.jpg', dest: 'public/teachers/fizika.jpg' },
  { src: 'teachers/fizika1.png', dest: 'public/teachers/fizika1.png' }
];

imagesToCopy.forEach(({ src, dest }) => {
  const srcPath = path.join(__dirname, src);
  const destPath = path.join(__dirname, dest);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`✓ Copied ${src} to ${dest}`);
  } else {
    console.error(`✗ Source file not found: ${src}`);
  }
});

console.log('\nDone! Images are now in public/teachers/ folder.');

