export const data = {
  user: {
    id: 1,
    name: 'Abdi',
    email: 'a.cagarweyne@gmail.com',
    enrolled_courses: [5, 8, 9],
    last_lesson_accessed: 27,
    lessons_completed: null,
    completed_courses: null,
    membership_type: null,
    membership_status: null,
    role: 'admin',
    join_date: '1656789972544',
    stripe_customer_id: 'cus_MCycjJB4JK7tZy',
    last_course_accessed: 5,
    scholarship: null,
  },
  courses: [
    {
      id: 2,
      course_name: 'Front End Web Development',
      description:
        'Become a Front End Engineer by mastering JavaScript, CSS, React, Frontend End Frameworks and more.',
      date_added: '1615051667621',
      last_updated: '1657642483007',
      text_based: false,
      course_image:
        'https://course-images-dev.s3.amazonaws.com/frontend_web_dev.png',
      author: 'FSS',
      published: false,
      free: false,
      sections_list: ['31', '6', '11', '12', '28', '29', '30'],
      price: '29.99',
      video_folder: '/users/115306089/projects/3239353',
      category: 'Front End',
      long_description: '',
      url: 'front-end-web-development',
      local: true,
    },

    {
      id: 3,
      course_name: 'Stripe Masterclass with React and Node JS',
      description:
        'Learn how to create an ecommerce site with React, Node, Firebase and Stripe',
      course_image:
        'https://course-images-dev.s3.amazonaws.com/stripe-masterclass.jpg',
      url: 'https://www.udemy.com/course/stripe-masterclass-with-react-node',
      published: true,
      category: 'Front End',
      local: false,
    },

    {
      id: 5,
      course_name: 'DevOps Masterclass with Terraform',
      description:
        'Deploy a real world E-Commerce application API with Terraform',
      url: 'https://www.udemy.com/course/devops-masterclass-with-terraform-packer-docker-github',
      course_image: 'https://course-images-dev.s3.amazonaws.com/devops.jpg',
      published: true,
      category: 'DevOps',
      local: false,
    },

    {
      id: 4,
      course_name: 'AS/A2 Computer Science',
      description: 'Advanced AS & A2 level tuition course',
      date_added: '1615051667621',
      last_updated: '1657642483007',
      text_based: false,
      course_image:
        'https://course-images-dev.s3.amazonaws.com/a_level_tuition.png',
      author: 'FSS',
      published: false,
      free: false,
      sections_list: [],
      price: '29.99',
      video_folder: '/users/115306089/projects/3239353',
      category: 'Tuition',
      long_description: '',
      url: 'a-level-computer-science-tutor',
      local: true,
    },
  ],
};
