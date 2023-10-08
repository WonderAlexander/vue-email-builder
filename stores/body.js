import { defineStore } from "pinia";

export const useBodyStore = defineStore('body', () => {

  const STORE_NAME = 'main'

  const body = ref([
    {
      name: 'PreHeader',
      preheader: 'Прехедер',
      component: 'PreHeader'
    },
    {
      name: 'DropZone',
      component: 'DropZone'
    }
  ])

  const bodyinLocalStorage = localStorage.getItem('body');
  if(bodyinLocalStorage) {
    body.value = JSON.parse(bodyinLocalStorage)._value;
  }

  const bodyLength = computed(() => body.length)

  function deleteBlock(block) {
    body.value = body.value.filter( item => item.id !== block.id);
  }

  function editPreheader(newPreheader) {
    body.value[0].preheader = newPreheader;
  }

  // function updateStorage() {
  //   localStorage.setItem(STORE_NAME, JSON.stringify(body.value))
  // }

  // function getStorage() {
  //   const store = localStorage.getItem(STORE_NAME)
  //   if( store) {
  //     return JSON.parse(store);
  //   }
  // }

  function readFile() {
    let file = document.querySelector('.dropZoneFiles').files[0];
  
    let reader = new FileReader();
  
    reader.readAsText(file);


    reader.onload = function() {
     body.value = JSON.parse(reader.result);
     console.log('work!');
    };
  }


  watch(() => body, 
  (state) => {
    localStorage.setItem('body', JSON.stringify(state));
  },
  {deep: true})

    return {body, deleteBlock, bodyLength, readFile, editPreheader}
  })
