// お菓子の箱（データを入れる場所）を作る方法を書いているよ
import { defineStore } from 'pinia';

// 「counter」という名前のお菓子の箱を作るよ
export const useCounterStore = defineStore('counter', {
  // state：箱の中に最初から入っているもの
  // count（数字）は最初は0だよ
  state: () => ({ count: 0 }),

  // getters：箱の中から何かを計算して取り出すときのルール
  getters: {
    // ceiling（てんじょう）：countを10単位に切り上げた数
    ceiling: (state) => {
      const round = 10; // 10単位にするよ
      return Math.ceil(state.count / round) * round; // 切り上げ計算をするよ
      // 例えば、countが7なら、7÷10=0.7を切り上げて1、そして1×10=10になるよ
    },
  },

  // actions：箱の中身を変えるための命令
  actions: {
    // increment：数字を1つ増やす命令
    increment() {
      this.count++; // countを1増やすよ（++は「1を足す」という意味）
    },
  },
});
