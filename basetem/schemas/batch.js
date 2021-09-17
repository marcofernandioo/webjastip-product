export default {
    name: 'batch',
    title: 'Batch',
    type: 'document',
    fields: [
        {
            title: "Gambar",
            name: "image",
            type: "image",
        },
        {
            title: "Nama Batch",
            name: "batchName",
            type: "string",
            description: "Cth. Batch ke-7, atau Batch Medan ke-6"
        },
        {
            title: "Deskripsi",
            name: 'desc',
            type: 'text'
        }
    ],
    preview: {
        select: {
            title: 'batchName',
            media: 'image'
        }
    }
}