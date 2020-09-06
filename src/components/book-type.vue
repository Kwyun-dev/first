<template>
    <div id="bookType">
        <h1>排行</h1>
        <div v-for="item in typeList" class="nav-style">
            <router-link :to="'/home/' + item.value">{{ item.name }}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            test: 'all',
            typeList: [
                {
                    name: "全部",
                    value: "all"
                },
                {
                    name: "长篇连载榜",
                    value: "long"
                },
                {
                    name: "长篇连载潜力榜",
                    value: "long-potential"
                },
                {
                    name: "长篇完本榜",
                    value: "long-finish"
                },
                {
                    name: "中篇榜",
                    value: "middle"
                },
                {
                    name: "长篇推荐票月榜",
                    value: "long-month"
                },
                {
                    name: "女性·长篇连载榜",
                    value: "long-female"
                },
                {
                    name: "女性·长篇连载潜力榜",
                    value: "long-potential-female"
                },
                {
                    name: "女性·长篇完本榜",
                    value: "long-finish-female"
                },
                {
                    name: "女性·中篇榜",
                    value: "middle-female"
                },
                {
                    name: "女性·长篇推荐票月榜",
                    value: "long-month-female"
                },
                {
                    name: "悬疑·长篇连载榜",
                    value: "long-suspense"
                },
                {
                    name: "悬疑·长篇连载潜力榜",
                    value: "long-potential-suspense"
                },
                {
                    name: "悬疑·长篇完本榜",
                    value: "long-finish-suspense"
                },
                {
                    name: "悬疑·中篇榜",
                    value: "middle-suspense"
                },
                {
                    name: "悬疑·长篇推荐票月榜",
                    value: "long-month-suspense"
                },
                {
                    name: "幻想·长篇连载榜",
                    value: "long-fantasy"
                },
                {
                    name: "幻想·长篇连载潜力榜",
                    value: "long-potential-fantasy"
                },
                {
                    name: "幻想·长篇完本榜",
                    value: "long-finish-fantasy"
                },
                {
                    name: "幻想·中篇榜",
                    value: "middle-fantasy"
                },
                {
                    name: "幻想·长篇推荐票月榜",
                    value: "long-month-fantasy"
                },
            ]
        }
    },
}
</script>

<style scoped>
    a {
        text-decoration: none;
        color: #000000;
    }

    .nav-style {
        display: inline-block;
        /* border: 1px solid #000000; */
        box-shadow: 1px 1px 5px #888888;
        border-radius: 5px;
        padding: 8px 15px;
        margin: 8px;
        font-family: Arial, Helvetica, sans-serif;
        cursor: pointer;
        transition: background-color 0.5s ease;
    }
    .nav-style:hover {
        background-color: #389eac;
    }
    .nav-style:hover a {
        color: #ffffff;
    }

    .router-link-active {
        /* background-color: #389eac; */
        text-decoration: none;
    }
</style>