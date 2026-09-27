import { mkdir, copyFile, rm } from 'node:fs/promises';
await rm('public',{recursive:true,force:true});
await rm('migrations',{recursive:true,force:true});
await mkdir('public/icons',{recursive:true});
await mkdir('migrations',{recursive:true});
for (const f of ['sw.js','manifest.webmanifest','favicon.png','apple-touch-icon.png','logo.svg']) await copyFile(f,`public/${f}`);
for (const f of ['icon-192.png','icon-512.png','maskable-512.png','icon-180.png']) await copyFile(f,`public/icons/${f}`);
for (const f of ['0001_initial.sql','0002_categories.sql']) await copyFile(f,`migrations/${f}`);
