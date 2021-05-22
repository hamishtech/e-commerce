interface Item {
  title: string;
  img: string;
  id: string;
  price: number;
}

export const itemData: Array<Item> = [
  {
    title: 'Modern Template',
    img: 'https://s3.resume.io/uploads/local_template_image/image/383/persistent-resource/santiago-resume-templates.jpg',
    id: '1',
    price: 1000,
  },
  {
    title: 'Minimalist Template',
    img: 'https://s3.resume.io/uploads/local_template_image/image/511/persistent-resource/barcelona-resume-templates.jpg',
    id: '2',
    price: 1200,
  },
  {
    title: 'Stylish Template',
    img: 'https://s3.resume.io/uploads/local_template_image/image/441/persistent-resource/sydney-resume-templates.jpg',
    id: '3',
    price: 1300,
  },
  {
    title: 'Clean Template',
    img: 'https://s3.resume.io/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg',
    id: '4',
    price: 1300,
  },
];
