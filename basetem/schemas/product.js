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
      type: 'text',
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
    }
  ]
}