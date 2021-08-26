export default {
  name: 'content',
  title: 'Konten',
  type: 'document',
  fields: [
    {
      title: 'Bagian',
      name: 'section',
      type: 'string',
      // readOnly: true
    },
    {
      title: 'Judul',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Deskripsi',
      name: 'text',
      type: 'text',
      description: 'uwu',
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'image'
    },
    {
      title: "Warna Utama",
      description: 'Warna yang dipilih akan menjadi warna utama pada website.',
      name: "color",
      type: "colorlist",
      options: {
        list: [
          { title: "White", value: "white" },
          { title: "Red", value: "#EF4444" },
          { title: "Orange", value: "#F59E0B"},
          { title: "Yellow", value: "#FBBF24"},
          { title: "Green", value: "#10B981" },
          { title: "Blue", value: "#3B82F6" },
          { title: "Purple", value: "#8B5CF6" },
        ]
      }
    },
  ], 
  preview: {
    select: {
      title: 'section',
      subtitle: 'title',
    }
  }
}