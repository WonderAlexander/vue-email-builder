<script setup>
    // Text Editing Library
    import { QuillEditor } from '@vueup/vue-quill';
    import '@vueup/vue-quill/dist/vue-quill.snow.css';

    // Props to get data
    const props = defineProps(['block','placeholder', 'content']);

    // Toggle edit panel
    const editable = ref(false);

    // New content
    const newContent = ref(props.content);

    // Toolbar
    const toolBarOptions =  [
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }],
        ['link']
    ];

</script>

<template>
    <tr class="email__block">
        <td style="padding:0; position: relative;">

            <!-- Block Actions -->
            <div class="block__actions">
                <div class="handle">
                    <img src="https://pic.mos.ru/srv/images/e0697feb6a49564dd4b25a3c5767c9e3.png" alt="">
                </div>
                <div class="delete__btn" @click="editable = true" style="margin-right: 5px;">
                    <img src="https://pic.mos.ru/srv/images/2b2101003755ca4ff95c055e73a07ee5.png" alt="">
                </div>
                <div class="delete__btn" @click="$emit('deleteBlock')">
                    <img src="https://pic.mos.ru/srv/images/99f341f887108bcc1e76d245175642e1.png" alt="">
                </div>
            </div>
            <!-- End of Block Actions -->

            <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                    <td class="p10px" align="left" style="padding: 25px 42px 0 43px;">

                        <table width="100%" cellpadding="0" cellspacing="0">

                            <!-- Block content -->
                            <tr>
                                <td v-if="!editable" class="s_title" v-html="newContent" align="left" style="padding: 0; font-family:'Helvetica', Arial, sans-serif; font-size: 24px; font-weight: 600;"> </td>
                            </tr>
                            <!-- End of Block content -->

                            <!-- Edit panel  -->
                            <tr v-if="editable">
                                <td>
                                    <form class="edit__form" @submit="editable = false, $emit('editContent', newContent)">
                                        <quill-editor v-model:content="newContent" contentType="html" theme="snow" :toolbar="toolBarOptions" style="padding: 0; font-family:'Helvetica', Arial, sans-serif; font-size: 24px; font-weight: 600;"></quill-editor>
                                        <button type="submit" class="text__change-btn">Сохранить</button>
                                    </form>
                                </td>
                            </tr>
                            <!-- End of Edit panel -->

                        </table>

                    </td>
                </tr>
            </table>

        </td>
    </tr>
</template>

