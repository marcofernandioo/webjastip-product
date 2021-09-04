export default {
  name: 'product',
  title: 'Produk',
  type: 'document',
  fields: [
    {
      title: "Gambar",
      name: 'image',
      type: 'image',
      validation: Rule => Rule.required()
    },
    {
      title: "Nama",
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Harga (Rp.)',
      name: 'price',
      type: 'number',
      validation: Rule => Rule.required()
    },
    {
      title: 'Keterangan',
      name: 'desc',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Kategori',
      name: 'category',
      type: 'reference',
      to: {type: 'kategori'},
      validation: Rule => Rule.required()
    },
    {
      title: 'Slot terbatas',
      name: 'limitedslot',
      type: 'boolean',
      initialValue: false,
      description: 'Status stok terbatas akan ditampilkan pada daftar produk.'
    },
    {
      title: 'Bestseller',
      name: 'bestseller',
      type: 'boolean',
      initialValue: false,
      description: 'Produk dengan label bestseller akan ditampilkan di halaman utama website.'
    },
    // {
    //   title: "Color List",
    //   description: "Pick a color",
    //   name: "colorlist",
    //   type: "colors", // required
    //   options: {
    //     borderradius: {
    //       outer: "100%",
    //       inner: "100%"
    //     },
    //     list: [
    //       { title: "Yellow", value: "rgba(245, 199, 1, 0.5)" },
    //       { title: "Pink", value: {r: 246, g: 206, b: 219} },
    //       { title: "Red", value: "#f16d70" },
    //       { title: "Teal", value: "#88c6db" },
    //       { title: "Purple", value: "#aca0cc" },
    //       { title: "Green", value: "#bdcdcb" },
    //       { title: "White", value: "white" }
    //     ]
    //   }
    // },
  ]
}