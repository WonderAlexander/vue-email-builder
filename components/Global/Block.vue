<script setup>
    import draggable from 'vuedraggable';
    const props = defineProps(['block', 'inner']);

    const newInner = ref(props.inner);

    import { useBodyStore } from '~/stores/body';
    
    const emailBody = useBodyStore();

</script>


<template>
    <tr class="email__block" style="position: relative; padding: 0; margin: 0;">
        <td style="padding: 0; margin: 0;">
            <table width="100%" cellpadding="0" cellspacing="0">
                <tr style="padding: 0; margin: 0;">
                    <td class="p10px" align="center" style="padding: 13px 40px 0px 41px;">
                        <div class="block__actions">
                            <div class="handle">
                                <img src="https://pic.mos.ru/srv/images/e0697feb6a49564dd4b25a3c5767c9e3.png" alt="">
                            </div>
                
                            <div class="delete__btn" @click="$emit('deleteBlock')">
                                <img src="https://pic.mos.ru/srv/images/99f341f887108bcc1e76d245175642e1.png" alt="">
                            </div>
                        </div>
                        <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                                <th class="stretch" width="515" align="center" valign="middle" style="padding:0; vertical-align:top; margin: 0; width: 100%; max-width: 515px;">

                                    <table width="100%" cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td>
                                                <img src="https://pic.mos.ru/srv/images/028e3cc8f9247425f1c639a67e48c602.png" width="515" style="border:none; display:block; max-width:515px; outline:0;width:100%; height:auto;">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="s_block" bgcolor="#f7f7f7" align="left" valign="middle" style="padding: 16px 30px 16px 30px; color: #000000; font-size:16px; font-weight:300; font-family:'Helvetica', Arial, sans-serif; line-height: 20px; background:#f7f7f7;">
                                                
                                                
                                                <draggable v-model="newInner" 
                                                    handle=".component__handle" 
                                                    :group="{ name: 'content'}" 
                                                    item-key="id" 
                                                    tag="table" 
                                                    style="width: 100%;" width="100%"
                                                    @mouseout="$emit('editInner', newInner)"
                                                >
                                                    <template #item="{ element: element }">
                                                        <component 
                                                            class="email__component"
                                                            :is="resolveComponent(element.name)"
                                                            :placeholder="element.placeholder"
                                                            :content="element.content"
                                                            :element="element"
                                                            :personName="element.personName"
                                                            :length="newInner.length"
                                                            :src="element.src"
                                                            :lists="element.lists"
                                                            :space="element.space"
                                                            :html="element.html"
                                                            @delete-component="newInner = newInner.filter(item => item.id !== element.id)" 
                                                            @edit-content="(newContent) => element.content = newContent"
                                                            @edit-src="(newSrc) => element.src = newSrc"
                                                            @edit-list="(newList) => element.lists = newList"
                                                            @edit-html="(newIcon) => element.html = newIcon"
                                                            @edit-person="(personName) => element.personName = personName"
                                                            @edit-space="(inervalHeight) => element.space = inervalHeight"
                                                        >
                                                        </component>
                                                    </template>
                                                </draggable>
    
                                
                                            </td>
                                        </tr>
                                        <tr>
                                            <td valign="top" height="14" style="height:14px;line-height:14px; vertical-align:top;">
                                                <img src="https://pic.mos.ru/srv/images/6bffd91b3ec3c89ccc672b8ab781ec73.png" width="515" style="border:none; display:block; max-width:515px; outline:0;width:100%; height:auto; vertical-align:top;">
                                            </td>
                                        </tr>

                                    </table>

                                </th>
                            </tr>
                        </table>

                    </td>
                </tr>
            </table>
        </td>
    </tr>
</template>
