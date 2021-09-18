export default {
  name: 'kategori',
  title: 'Kategori',
  type: 'document',
  fields: [
    {
      title: 'Kategori',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    }
  ]
}