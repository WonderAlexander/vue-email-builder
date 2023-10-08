<script setup>
    import { QuillEditor } from '@vueup/vue-quill';
    import '@vueup/vue-quill/dist/vue-quill.bubble.css';
    import { useBodyStore } from '~/stores/body';
    
    const emailBody = useBodyStore();
    const props = defineProps(['preheader']);
    const editable = ref(false);
    const newPreheader = ref(props.preheader);
    const toolBarOptions =    [
        ['bold', 'italic', 'underline', 'strike'], 
                        

        [{ 'size': ['small', false, 'large', 'huge'] }],  

        [{ 'color': [] }],
        ['link'],       

        ['clean']                                    
    ];
</script>

<template>
    <tr v-if="emailBody.body.length === 0" class="email__block">
        <td class="s_block" align="left" valign="middle" style="padding: 0; padding-left: 45px; color: #000000; font-size:16px; font-weight:300; font-family:'Helvetica', Arial, sans-serif; line-height: 20px; background:transparent; position: relative;">
            <div class="block__actions">
                <div class="delete__btn" @click="editable = true" style="margin-right: 5px;">
                    <img src="https://pic.mos.ru/srv/images/2b2101003755ca4ff95c055e73a07ee5.png" alt="">
                </div>
            </div>

            <p v-if="!editable" style="margin: 0; padding: 0; color: #808080; margin-bottom: 15px; font-style: italic;">Прехедер макета рассылки: <span style="color: #000; font-style: normal;">{{ props.preheader }}</span></p>
            <form class="edit__form" v-if="editable"  @submit="editable = false, $emit('editPreheader', newPreheader)">
                <quill-editor v-model:content="newPreheader" contentType="text" theme="snow" :toolbar="toolBarOptions" style="padding: 0; color: #000000; font-size:16px; font-weight:300; font-family:'Helvetica', Arial, sans-serif; line-height: 20px; background:transparent; position: relative;"></quill-editor>
                <button type="submit" class="text__change-btn">Сохранить</button>
            </form>
            
        </td>
    </tr>
</template>


