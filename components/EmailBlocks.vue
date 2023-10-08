<script setup>
    import draggable from 'vuedraggable'
    import { useBuilderStore } from '@/stores/builder';

    const emailBuilder = useBuilderStore();
</script>

<template>
    <div>
        <h2 class="email__blocks-header">1. Выберите блок</h2>
        <p style="margin-bottom: 15px; color: #808080; font-style: italic;">Основные элементы макета рассылки</p>
        <draggable 
            class="email__blocks-list" 
            v-model="emailBuilder.builderItems"
            :group="{ name: 'builder', pull: 'clone', put: false }" 
            item-key="id"
            @end="emailBuilder.addUniqueId(), emailBuilder.addDropZone()"
        >
            <template #item="{element}">
                <div class="block" v-if="element.type === 'block'">
                    <img class="block__icon" :src="element.icon" alt="Иконка">
                    <p class="block__title">{{ element.title }}</p>
                    <component style="display: none;" :is="resolveComponent(element.name)" />
                </div>
            </template>
        </draggable>
    </div>
</template>


<style scoped lang="scss">
    .email__blocks-header {
        padding:0; 
        color:#000000; 
        font-size: 20px; 
        font-weight:600; 
        font-family:'Helvetica', Arial, sans-serif;
        margin-bottom: 3px;
    }

    .email__blocks-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        column-gap: 15px;
        row-gap: 15px;
        justify-items : center;
        margin-bottom: 30px;
    }

    .block {
        width: 100%;
        height: 80px;
        border-radius: 12px;
        background-color: #ffffff;
        -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: move;

        &__icon {
            width: 65px;
            height: 32px;
        }

        &__title {
            color:#808080; 
            font-size:14px; 
            font-weight:500; 
            font-family:'Helvetica', Arial, sans-serif;
            margin-top: 5px;
        }
    }

    @media (max-width: 1200px) {
        .email__blocks-list {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>