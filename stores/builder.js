import { defineStore } from "pinia";
import { nanoid } from "nanoid";

export const useBuilderStore = defineStore('builder', () => {

    const builderItems = ref([
        {   
            type: 'block',
            id: null,
            name: 'Header',
            title: 'Заголовок',
            content: 'Заголовок',
            icon: 'https://pic.mos.ru/srv/images/a9907000cf55bf21d5a646184dfdd2ba.png',
            component: 'Header'
        },
        {
            type: 'block',
            id: null,
            name: 'Banner',
            title: 'Баннер',
            icon: 'https://pic.mos.ru/srv/images/d3bad12dfa7e8343e26684b6e737ebbf.png',
            src: 'https://placehold.co/1030x340',
            component: 'Banner'
        },
        {
            type: 'block',
            id: null,
            title: 'Кнопка',
            name: "Button",
            icon: 'https://pic.mos.ru/srv/images/48d8159c4a57a1578bd5e92dddfdf7fa.png',
            html: '<img src="https://pic.mos.ru/srv/images/ad23377c2bf77364dc911a6144dc19ce.png" width="150" alt="Узнать новость" align="left" style="display:block;border:0; width:150px; outline:0; text-decoration:none;  height:auto; vertical-align:middle;margin:0 auto;">',
            link: '',
            component: "Button"
        },
        {   
            type: 'block',
            id: null,
            name: 'Footer',
            title: 'Подвал',
            icon: 'https://pic.mos.ru/srv/images/c877b8f5d225913ed23af322e25faa6b.png',
            content: '<p>С уважением,</p><p>команда сервиса «Корпоративные коммуникации»</p>',
            component: "Footer"
        },
        {
            type: 'block',
            id: null,
            title: 'Изображение',
            name: 'Image',
            icon: 'https://pic.mos.ru/srv/images/ee5454c89afeac2fa2cc6bf9e7216279.png',
            src: 'https://placehold.co/600x400?text=%D0%98%D0%97%D0%9E%D0%91%D0%A0%D0%90%D0%96%D0%95%D0%9D%D0%98%D0%95',
            content: '',
            component: "Image"
        },
        {
            type: 'block',
            id: null,
            name: 'Block',
            title: 'Блок',
            icon: 'https://pic.mos.ru/srv/images/d4158622188d18926c408812cd9054c9.png',
            inner: ref([
                {
                    type: 'content',
                    id: nanoid(),
                    name: 'BlockDropZone',
                }
            ]),
            component: "Block"
        },
        {   
            type: 'content',
            id: null,
            title: 'Текст',
            name: 'Text',
            icon: 'https://pic.mos.ru/srv/images/2c1e82419cb142eb4a6717dfb93a50b9.png',
            content: 'Вставьте сюда ваш текст.',
            component: 'Text'
        },
        {
            type: 'content',
            id: null,
            title: 'Изображение',
            name: 'ImageContent',
            icon: 'https://pic.mos.ru/srv/images/ee5454c89afeac2fa2cc6bf9e7216279.png',
            src: 'https://placehold.co/600x400?text=%D0%98%D0%97%D0%9E%D0%91%D0%A0%D0%90%D0%96%D0%95%D0%9D%D0%98%D0%95',
            component: 'ImageContent'
        },
        {
            type: 'content',
            id: null,
            title: 'Маркированный список',
            name: 'List',
            lists: ref([
                {   
                    id: nanoid(),
                    name: 'ListElem',
                    content: 'Элемент списка',
                },
                {   
                    id: nanoid(),
                    name: 'ListElem',
                    content: 'Элемент списка',
                },
                {   
                    id: nanoid(),
                    name: 'ListElem',
                    content: 'Элемент списка',
                },
                {   
                    id: nanoid(),
                    name: 'ListElem',
                    content: 'Элемент списка',
                },
                {   
                    id: nanoid(),
                    name: 'ListElem',
                    content: 'Элемент списка',
                }
            ]),
            icon: 'https://pic.mos.ru/srv/images/232d50fe45de9b5767b21bd717a150e5.png',
        },
        {   
            type: 'content',
            visible: false,
            id: nanoid(),
            name: 'ListElem',
            content: 'Элемент списка',
        },
        {
            type: 'content',
            visible: false,
            id: nanoid(),
            name: 'BlockDropZone',
        },
        
        {
            type: 'content',
            id: null,
            title: 'Нумерованный список',
            name: 'NumberList',
            lists: ref([
                {   
                    id: nanoid(),
                    count: 1,
                    content: 'Элемент списка',
                    src: 'https://pic.mos.ru/srv/images/f56ae6a1f9286369953d5395838ecc98.png',
                    name: 'NumberListItem',
                },
                {   
                    id: nanoid(),
                    count: 2,
                    content: 'Элемент списка',
                    src: 'https://pic.mos.ru/srv/images/de233cdef273bdb83901f37f74274024.png',
                    name: 'NumberListItem',
                },
                {   
                    id: nanoid(),
                    count: 3,
                    content: 'Элемент списка',
                    src: 'https://pic.mos.ru/srv/images/c479c4e69056a6655eb26ddabc86131d.png',
                    name: 'NumberListItem',
                },
                {   
                    id: nanoid(),
                    count: 4,
                    content: 'Элемент списка',
                    src: 'https://pic.mos.ru/srv/images/8c58c8be04dd217b1f5050c693835647.png',
                    name: 'NumberListItem',
                },
                {   
                    id: nanoid(),
                    count: 5,
                    content: 'Элемент списка',
                    name: 'NumberListItem',
                    src: 'https://pic.mos.ru/srv/images/4b8389446341a54fb01a9b79c222741f.png',
                }
            ]),
            icon: 'https://pic.mos.ru/srv/images/04e15d702bd02226aacb2a15489d8375.png'
        },
        {   
            type: 'content',
            id: nanoid(),
            visible: false,
            count: 1,
            name: 'NumberListItem',
            content: 'Элемент списка',
            src: 'https://pic.mos.ru/srv/images/f56ae6a1f9286369953d5395838ecc98.png',
        },
        {
            type: 'content',
            id: null,
            title: 'Иконка',
            name: 'IconText',
            icon: 'https://pic.mos.ru/srv/images/537ab0d5616ce68ec57e160989f217f7.png',
            content: 'Этот текст можно оставить или удалить',
            html: `<img src="https://pic.mos.ru/srv/images/79fea96a878fd8dd16fc0c50346aa8a0.png" width="24" style="border:none;display:block; width:24px; outline:0; height: auto;">`
        },
        {
            type: 'content',
            id: null,
            title: 'Сотрудник',
            name: 'Employee',
            src: 'https://placehold.co/190x190?',
            icon: 'https://pic.mos.ru/srv/images/e439fd7c042c6b5d188bf0f847a8ad34.png',
            personName: `<b style="display:block">Имя сотрудника</b>Должность сотрудника`
        },
        {
            type: 'content',
            id: null,
            title: 'Разделитель',
            name: 'Separator',
            icon: 'https://pic.mos.ru/srv/images/c7482d2bc1e99d5a7ca8156c305b23fc.png',
        },
        {
            type: 'content',
            id: null,
            title: 'Интервал',
            name: 'Interval',
            icon: 'https://pic.mos.ru/srv/images/1bad67e9da8830e4365f187a94304f93.png',
            content: '',
            space: 20
        },
    
    ])

        function addUniqueId() {
            builderItems.value = builderItems.value.map( elem => {
                elem.id = nanoid();
                return Object.assign({}, elem)
            });
        }

        function addDropZone() {
           for(let i = 0; i < builderItems.value.length; i++) {
                if(builderItems.value[i].name === 'Block'); {
                    // builderItems.value[i].inner.push = [{   
                    //      id: null,
                    //       name: 'BlockDropZone',
                    //       title: 'DropZone',
                    //     }]
                    let inner = builderItems.value[i].inner;
        
                    console.log(inner);
                }
        }
    }
    
    return { builderItems, addUniqueId, addDropZone }
  })