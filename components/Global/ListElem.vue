<script setup>
    import { QuillEditor } from '@vueup/vue-quill';
    import '@vueup/vue-quill/dist/vue-quill.bubble.css';
    const props = defineProps(['placeholder', 'content', 'list']);
    const editable = ref(false);
    const newContent = ref(props.content);
    const toolBarOptions =    [
        ['bold', 'italic', 'underline', 'strike'], 
                        

        [{ 'size': ['small', false, 'large', 'huge'] }],  

        [{ 'color': [] }],
        ['link'],       

        ['clean']                                    
    ];
</script>

<template>
    <tr>
        <td valign="top" style="padding: 5px 0; margin: 0;">
            <div class="components-item__actions">
                <div class="component__handle">
                    <img src="https://pic.mos.ru/srv/images/60d6a2d5f01d22843ff8136e6a4940f7.png" alt="">
                </div>
                <div class="delete__btn" @click="editable = true" style="margin-right: 5px;">
                    <img src="https://pic.mos.ru/srv/images/8d055ffd6bbe89b02f1673a6bfc2bf8b.png" alt="">
                </div>
                <div class="delete__btn" @click="$emit('deleteComponent')">
                    <img src="https://pic.mos.ru/srv/images/c72c7fce459fd26c785ab0ca7dffeb94.png" alt="">
                </div>
            </div>
            <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                    <td valign="top" style="color:#ff0000; width:20px; text-align:left; vertical-align:top; line-height:20px; font-size:16px;">
                        <span style="font-weight: 300 !important;">&bull;</span>
                    </td>
                    <td valign="top" style="padding:0;color: #000000; font-size:16px; font-weight:300; font-family:'Helvetica', Arial, sans-serif; line-height: 20px;vertical-align:top">
                        <p v-if="!editable" v-html="newContent" style="margin: 0; padding: 0;"></p>
                        <form class="edit__form" v-if="editable" @submit="editable = false, $emit('editBullet', newContent)">
                            <quill-editor v-model:content="newContent" contentType="html" theme="snow" :toolbar="toolBarOptions" style="padding:0; color: #000000; font-size:16px; font-weight:300; font-family:'Helvetica', Arial, sans-serif; line-height: 20px;vertical-align:top"></quill-editor>
                            <button type="submit" class="text__change-btn">Сохранить</button>
                        </form>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</template>