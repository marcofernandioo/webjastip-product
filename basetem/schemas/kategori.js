export default {
  name: 'kategori',
  title: 'Kategori',
  type: 'document',
  fields: [
    {
      title: 'Kategori',
      name: 'title',
      type: 'string'
    },
    {
      title: "Warna Kategori",
      description: 'Warna.',
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
  ]
}