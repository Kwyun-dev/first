<template>
    <div id="allType">
        <button @click="getMsg">test</button>
        <div v-for="item in datalist">
            <h2>{{ item.title }}</h2>
            <div v-for="item1 in item.single" class="single-type">
                <div class="title"> {{ item1.category }} </div>
                <div class="description"> {{ item1.description}} </div>
                <div v-for="(item2, index) in item1.books">
                    <span>{{ index+1 }}</span>
                    <span>{{ item2.name }}</span>
                    <div>{{ item2.author }}</div>
                    <div>{{ item2.type[0] }} | {{ item2.type[1] }}</div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            datalist: [
                {
                    title: "综合排行",
                    single: [
                        {
                            category: "长篇连载榜",
                            description: "作品三日内有更新，按周热度排行",
                            books: [
                                { 
                                    name: "五环外的女人",
                                    author: "伊北",
                                    type: ["女性", "成长逆袭"],
                                    image: "",
                                },
                                {
                                    name: "五环外的女人",
                                    author: "伊北",
                                    type: ["女性", "成长逆袭"],
                                    image: "",
                                },
                                {
                                    name: "五环外的女人",
                                    author: "伊北",
                                    type: ["女性", "成长逆袭"],
                                    image: "",
                                },
                                {
                                    name: "五环外的女人",
                                    author: "伊北",
                                    type: ["女性", "成长逆袭"],
                                    image: "",
                                },
                                {
                                    name: "五环外的女人",
                                    author: "伊北",
                                    type: ["女性", "成长逆袭"],
                                    image: "",
                                },
                                {
                                    name: "五环外的女人",
                                    author: "伊北",
                                    type: ["女性", "成长逆袭"],
                                    image: "",
                                },
                            ]
                        },{
                            category: "长篇连载潜力榜",
                            description: "作品七日内有更新且字数在二万至十万之间，按周阅读时长排序",
                            books: [
                                {
                                    name: "没有死者的谋杀",
                                    author: "伊北",
                                    type: ["女性", "成长逆袭"],
                                    image: "",
                                },
                                {
                                    name: "五环外的女人",
                                    author: "伊北",
                                    type: ["女性", "成长逆袭"],
                                    image: "",
                                },
                                {
                                    name: "五环外的女人",
                                    author: "伊北",
                                    type: ["女性", "成长逆袭"],
                                    image: "",
                                },
                                {
                                    name: "五环外的女人",
                                    author: "伊北",
                                    type: ["女性", "成长逆袭"],
                                    image: "",
                                },
                            ]
                        },{
                            category: "长篇连载榜",
                            description: "作品三日内有更新，按周热度排行",
                            books: [
                                {
                                    name: "五环外的女人",
                                    author: "伊北",
                                    type: ["女性", "成长逆袭"],
                                    image: "",
                                },
                                {
                                    name: "五环外的女人",
                                    author: "伊北",
                                    type: ["女性", "成长逆袭"],
                                    image: "",
                                },
                                {
                                    name: "五环外的女人",
                                    author: "伊北",
                                    type: ["女性", "成长逆袭"],
                                    image: "",
                                },
                                {
                                    name: "五环外的女人",
                                    author: "伊北",
                                    type: ["女性", "成长逆袭"],
                                    image: "",
                                },
                            ]
                        },{
                            category: "长篇连载榜",
                            description: "作品三日内有更新，按周热度排行",
                            books: [
                                {
                                    name: "五环外的女人",
                                    author: "伊北",
                                    type: ["女性", "成长逆袭"],
                                    image: "",
                                },
                                {
                                    name: "五环外的女人",
                                    author: "伊北",
                                    type: ["女性", "成长逆袭"],
                                    image: "",
                                },
                                {
                                    name: "五环外的女人",
                                    author: "伊北",
                                    type: ["女性", "成长逆袭"],
                                    image: "",
                                },
                                {
                                    name: "五环外的女人",
                                    author: "伊北",
                                    type: ["女性", "成长逆袭"],
                                    image: "",
                                },
                            ]
                        },{
                            category: "长篇连载榜",
                            description: "作品三日内有更新，按周热度排行",
                            books: [
                                {
                                    name: "五环外的女人",
                                    author: "伊北",
                                    type: ["女性", "成长逆袭"],
                                    image: "",
                                },
                                {
                                    name: "五环外的女人",
                                    author: "伊北",
                                    type: ["女性", "成长逆袭"],
                                    image: "",
                                },
                                {
                                    name: "五环外的女人",
                                    author: "伊北",
                                    type: ["女性", "成长逆袭"],
                                    image: "",
                                },
                                {
                                    name: "五环外的女人",
                                    author: "伊北",
                                    type: ["女性", "成长逆袭"],
                                    image: "",
                                },
                            ]
                        },
                    ]
                }
            ]
        }
    },
    methods: {
        getMsg() {
            this.$axios.get('http://localhost:8899/commonLpt/getJudgeList').then((res) => {
                console.log(res);
            })
        }
    },
}
</script>
<style scoped>
    #allType {
        width: 100%;
    }

    .description {
        font-size: 12px;
        height: 35px;
    }

    .single-type {
        display: inline-block;
        width: 23%;
        height: 500px;
        margin: 10px;
    }
</style>