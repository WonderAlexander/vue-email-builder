<script setup>
    import draggable from 'vuedraggable';
    const props = defineProps(['element', 'block', 'lists'])
    import { useBodyStore } from '~/stores/body';
    import { nanoid } from "nanoid";
    
    const emailBody = useBodyStore();

    const newList = ref(props.lists);

    const addNewListItem = (list) => {
        list.push({ id: nanoid(), src: 'https://placehold.co/200x200', content: 'Элемент списка', name: 'NumberListItem'})
    }
</script>

<template>
    <tr @mouseout="$emit('editList', newList)">
        <td>
            <div class="components__actions">
                <div class="add__btn" @click="addNewListItem(newList)">
                    <img src="https://pic.mos.ru/srv/images/e08e62568896c3d0ef66457a1431b16d.png" alt="">
                </div>
                <div class="component__handle">
                    <img src="https://pic.mos.ru/srv/images/e0697feb6a49564dd4b25a3c5767c9e3.png" alt="">
                </div>
                <div class="delete__btn" @click="$emit('deleteComponent')">
                    <img src="https://pic.mos.ru/srv/images/99f341f887108bcc1e76d245175642e1.png" alt="">
                </div>
            </div>
            <draggable 
                v-model="newList" 
                :group="{ name: 'builder'}" 
                item-key="id"
                tag="table"
                handle=".component__handle"
                width="100%" 
                align="center"
                style="width: 100%;" cellpadding="0" cellspacing="0"
            >
                <template #item="{ element: listItem }">
                    <component 
                        class="email__component-item"
                        @delete-item="emailBody.deleteItem(element, listItem)" 
                        :is="resolveComponent(listItem.name)"
                        :placeholder="listItem.placeholder"
                        :src="listItem.src"
                        :content="listItem.content"
                        @delete-component="newList = newList.filter(item => item.id !== listItem.id)" 
                        @edit-bullet="(newContent) => listItem.content = newContent"
                    >
                    </component>
                </template>
            </draggable>
        </td>
    </tr>
</template>