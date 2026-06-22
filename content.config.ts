import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(60),
    description: z.string().max(155),
    pubDate: z.string().optional(),
    image: z.string(),
    imageAlt: z.string(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    keywords: z.array(z.string()).optional(),
    faqItems: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const directorio = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/directorio' }),
  schema: z.object({
    nombre: z.string(),
    categoria: z.enum(['audio', 'iluminacion', 'audio-video', 'dj', 'efectos']),
    zona: z.enum(['cdmx', 'estado-de-mexico']),
    alcaldia_municipio: z.string(),
    direccion: z.string(),
    telefono: z.string().optional(),
    whatsapp: z.string().optional(),
    facebook: z.string().optional(),
    instagram: z.string().optional(),
    horario: z.string().optional(),
    rating: z.number().optional(),
    resenas: z.number().optional(),
    servicios: z.array(z.string()),
    activo: z.boolean().default(true),
  }),
});

export const collections = { blog, directorio };
