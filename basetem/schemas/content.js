export default {
  name: 'content',
  title: 'Konten',
  type: 'document',
  fields: [
    {
      title: 'Bagian',
      name: 'section',
      type: 'string',
    },
    {
      title: 'Judul',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Deskripsi',
      name: 'text',
      type: 'string',
      description: 'uwu',
    },
    {
      title: 'Gambar',
      name: 'image',
      type: 'image'
    }
  ]
}