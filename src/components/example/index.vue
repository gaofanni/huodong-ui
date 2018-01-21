<template>
    <div class="wrap">
        <div class="info">
            <div class='title'>{{info.title}}</div>
            <div class="author">{{info.author}}</div>
        </div>
        <slot name='componentSlot'></slot>
        <div class="btn-showCode"
            @click="isShowCode=!isShowCode">{{isShowCode?`隐藏代码`:`显示代码`}}</div>
        <div class="code-wrap"
            v-show="isShowCode">
            <div class="tips">
                通过v-for插槽增加抽奖的单元个数，注意
                <span class='hl'>:slot='`box${index+1}`'</span>需对应index传入，预览效果为一次中奖一次没中奖
            </div>
            <pre class="code language-markup"
                v-show="isShowCode"
                v-html="html">
        </pre>
        </div>
        <table class="attributes">
            <caption class="title">Attributes</caption>
            <thead>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
                <th>可选值</th>
            </thead>
            <tbody>
                <tr v-for="body in tableInfo.attributes">
                    <td>{{body.propName}}</td>
                    <td>{{body.explain}}</td>
                    <td>{{body.type}}</td>
                    <td>{{body.default}}</td>
                    <td>{{body.choose}}</td>
                </tr>
            </tbody>
        </table>
        <table class='events'>
            <caption class="title">Events</caption>
            <thead>
                <th>事件名</th>
                <th>说明</th>
                <th>参数</th>
            </thead>
            <tbody>
                <tr v-for="event in tableInfo.events">
                    <td>{{event.eventsName}}</td>
                    <td>{{event.explain}}</td>
                    <td>{{event.default}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
      props: ["info", "code", "tips", "tableInfo"],
      data() {
        return {
          isShowCode: false
        };
      },
      methods: {},
      components: {}
    };
</script>

