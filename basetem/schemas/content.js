export default {
  name: 'content',
  title: 'Konten',
  type: 'document',
  fields: [
    {
      title: 'Judul',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Deskripsi',
      name: 'text',
      type: 'text',
      description: 'Deskripsi website untuk ditampilakn di halama utama website.',
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
      description: 'Gunakan logo dari bisnismu.',
      validation: Rule => Rule.required()
    },
  ], 
  preview: {
    select: {
      title: 'header',
      subtitle: 'title',
      media: 'logo'
    }
  }
}