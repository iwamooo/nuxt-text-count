<template lang="pug">
  .wrapper(:class="[isDarkTheme ? 'darkTheme' : '', isEditMode ? 'editMode' : '']")
    header
      .inner
        h1 文字数・バイト数をカウントします。
        p
          | テキストボックスに入力された文字数・バイト数をカウントする便利なツール・サービスです。
          br.u-br
          | WEBサイトのライティング作業、Twitter投稿、レポート作成など、文字数制限のある文章作成をサポートします！

        dl.usage
          dt.usageTitle 使い方
          dd.usageDescription
            | テキストボックスに入力するとすぐに文字数・バイト数がカウントされます。
            br
            | ※ 一部のブラウザを除き、オフラインの状態であってもネイティブアプリのように高速で読み込めます。
        dl.usage
          dt.usageTitle 文字数
          dd.usageDescription
            | 半角・全角文字ともに1文字としてカウントされます。
            br.u-br
            | 改行文字も1文字としてカウントした文字数が表示されます。
        dl.usage
          dt.usageTitle バイト数
          dd.usageDescription 改行・半角文字を1バイト、全角文字を2バイトとしてカウントしたバイト数が表示されます。
        dl.usage
          dt.usageTitle 行数
          dd.usageDescription 行数が表示されます。

    .inner
      .checkboxItems
        .checkbox
          input#demo.js-checkbox(type="checkbox", value="theme")

          label(for="demo") ダークテーマ
            svg(viewBox="0 0 24 24")
              path(fill="none", stroke="white", d="M1.73,12.91 8.1,19.28 22.79,4.59")

        .checkbox
          input#demo2.js-checkbox(type="checkbox", value="edit")

          label(for="demo2") エディットモード
            svg(viewBox="0 0 24 24")
              path(fill="none", stroke="white", d="M1.73,12.91 8.1,19.28 22.79,4.59")

      .editModeInner
        textarea#js-count-target(placeholder="カウントしたい文字列を入力もしくは貼り付けてください。")

        .information
          button#js-count-reset リセット

          .informationInner
            dl.count
              dt.countTitle {{ textLengthFullCount }}
              dd.countDescription 文字数
            dl.count
              dt.countTitle {{ textByteCount }}
              dd.countDescription バイト数
            dl.count
              dt.countTitle {{ lineCount }}
              dd.countDescription 行数
    .bgBase
    .bgStyle
</template>

<script>
  export default {
    data () {
      return {
        isDarkTheme: false,
        isEditMode: false,
        textLengthFullCount: 0,
        textByteCount: 0,
        lineCount: 0
      }
    },

    methods: {
      target () {
        return document.getElementById('js-count-target')
      },

      targetValue () {
        return this.target().value
      },

      init () {
        this.localStorageSet()
        this.count()
        this.attachEventCheckbox()
      },

      count (el) {
        this.textLengthFullCount = this.textLengthFull()
        this.lineCount = this.line()
        this.textByteCount = this.byte(this.targetValue())
      },

      textLengthFull () {
        return this.targetValue().replace(/\r?\n/g, '').length
      },

      /*
      textLengthNoSpace () {
        return this.targetValue().replace(/\r?\n/g, '').replace(/\s/g, '').length
      },
      */

      line () {
        const targetLength = this.targetValue().length

        let count = 0

        if (this.targetValue().match(/\r?\n/g)) {
          count = this.targetValue().match(/\r?\n/g).length + 1
        } else if (targetLength > 0) {
          count = 1
        } else if (targetLength === 0) {
          count = 0
        }

        return count
      },

      byte (str) {
        let count = 0

        for (let i = 0, strLength = str.length; i < strLength; i++) {
          const c = str.charCodeAt(i)

          if ((c >= 0x0 && c < 0x81) || (c === 0xf8f0) || (c >= 0xff61 && c < 0xffa0) || (c >= 0xf8f1 && c < 0xf8f4)) {
            count += 1
          } else {
            count += 2
          }
        }

        return count
      },

      reset () {
        document.getElementById('js-count-target').value = ''

        this.textLengthFullCount = 0
        this.textByteCount = 0
        this.lineCount = 0
      },

      setting (target) {
        const value = target.value
        const bool = target.checked

        if (value === 'theme') {
          this.isDarkTheme = bool
        } else {
          this.isEditMode = bool
        }
      },

      attachEventCheckbox () {
        const checkBoxItems = [].slice.call(document.body.querySelectorAll('.js-checkbox'))

        checkBoxItems.forEach((el) => {
          el.addEventListener('change', (e) => {
            this.setting(e.currentTarget)
          })
        })
      },

      isLocalStorage () {
        if (window.localStorage) {
          return true
        } else {
          return false
        }
      },

      localStorageName () {
        return 'text'
      },

      localStorageSave () {
        if (this.isLocalStorage() && this.targetValue()) {
          localStorage.setItem(this.localStorageName(), JSON.stringify(this.targetValue()))
        }
      },

      localStorageGet () {
        if (this.isLocalStorage() && localStorage.getItem(this.localStorageName())) {
          return JSON.parse(localStorage.getItem(this.localStorageName()))
        } else {
          return false
        }
      },

      localStorageSet () {
        if (this.localStorageGet()) {
          this.target().value = this.localStorageGet()
        }
      },

      localStorageClear () {
        if (this.isLocalStorage()) {
          localStorage.removeItem(this.localStorageName())
        }
      },

      loadWebFont () {
        const webFontItems = [].slice.call(document.querySelectorAll('.js-webFont'))

        webFontItems.forEach((el) => {
          el.setAttribute('rel', 'stylesheet')
        })
      }
    },

    mounted () {
      this.init()

      document.getElementById('js-count-target').addEventListener('keyup', () => {
        this.count()
        this.localStorageSave()
      })

      document.getElementById('js-count-reset').addEventListener('click', () => {
        this.reset()
        this.localStorageClear()
      })

      window.addEventListener('load', () => {
        this.loadWebFont()
      })
    }
  }
</script>

<style lang="stylus" scoped>
.wrapper
  padding-top 16px
  transition .2s

header
  border-bottom 1px solid #eee
  margin-bottom 16px
  transition .2s

h1
  font-family "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  font-size 24px

.usage
  display flex

.usageTitle
  font-weight 700
  width 80px

.usageDescription
  flex 1

.editModeInner
  display flex

textarea
  background-color transparent
  border-color #323648
  border-radius 2px
  box-sizing border-box
  font-size 14px
  flex 1
  line-height 1.75
  outline none
  padding 8px 16px 8px 8px
  resize none
  transition .2s
  height calc(100vh - 347px)
  width 100%

button
  background-color #323648
  border 0
  border-radius 2px
  color #fff
  cursor pointer
  font-size 14px
  font-weight 500
  line-height 28px
  outline none
  padding-right 0
  padding-left 0
  transition .2s
  width 100%

  &:hover
    background-color rgba(50, 54, 72, .8)

.information
  margin-left 16px
  width 80px

.count
  margin-top 3em

.countTitle
  font-size 32px
  font-weight 700
  text-align center

.countDescription
  color #555
  font-size 16px
  margin-top 8px
  text-align center

.checkboxItems
  display flex
  height 30px
  padding 0 0 16px

.checkbox + .checkbox
  margin-left 32px

input[type="checkbox"]
  display none

  &:checked + label::before
    background-color #323648

  &:checked + label svg
    opacity 1

label
  cursor pointer
  display flex
  line-height 18px
  position relative

  &::before
    content ''
    display inline-block
    border 2px solid #323648
    border-radius 2px
    margin-right 8px
    top 7px
    height 14px
    vertical-align middle
    width 14px
    transition .2s

svg
  opacity 0
  position absolute
  top 3px
  left 3px
  width 12px
  transition .2s

path
  stroke-dashoffset 0
  stroke-width 3.5px

.darkTheme
  h1,
  .usageTitle
    color #f5f5f5

  p,
  .usageDescription
    color #ccc

  input:checked + label::before
    background-color #eee

  label
    color #ccc

  label:before
    border-color #eee

  path
    stroke #323648

  textarea
    border 0
    color #f5f5f5
    padding 0 16px 0 0

  :placeholder-shown,
  ::-webkit-input-placeholder
    color #f5f5f5

  :-moz-placeholder,
  ::-moz-placeholder
    color #f5f5f5

  :-ms-input-placeholder
    color #f5f5f5

  button
    background-color #eee
    color #222

  .countTitle
    color #f5f5f5

  .countDescription
    color #ccc

  .bgBase
    background-color #222

  .bgStyle
    background-color #2c2c2c

.editMode
  height 100vh
  overflow hidden

  header
    transform translateY(-300px)

  header + .inner
    transform translateY(-291px)

  textarea
    height calc(100vh - 56px)

  label
    font-size 12px

  button
    font-size 10px

  .information
    width 55px

  .informationInner
    font-size 10px

  .countTitle
    font-size 16px

  .countDescription
    font-size 12px

  label
    line-height 14px

  label::before
    height 10px
    width 10px

  svg
    width 8px

.bgBase,
.bgStyle
  position fixed
  top 0
  left 0
  height 100vh
  width 100vw

.bgBase
  background-color #fff
  z-index -2

.bgStyle
  background-color #fbfbfb
  clip-path polygon(-1% 100%, 100% 100%, 100% 0)
  z-index -1

@media screen and (max-width: 767px)
  .wrapper
    margin-bottom 10px

  h1
    font-size calc((100vw / 32) * 1.5)

  p,
  .usageTitle,
  .usageDescription
    font-size calc((100vw / 32))

  textarea
    height auto

  button
    font-size 10px

  .information
    width 55px

  .informationInner
    font-size 10px

  .countTitle
    font-size 16px

  .countDescription
    font-size 12px

  .u-br
    display none

  .editMode
    margin-top 0
    margin-bottom 0

    header
      display none

    header + .inner
      position absolute
      top 16px
      right 0
      left 0
      transform translateY(0px)

@media screen and (max-width: 767px) and (orientation: landscape)
  .wrapper
    margin-bottom 10px

  .editMode
    margin-bottom 0
</style>
