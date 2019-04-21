
<template>
    <div>
        <article>
            <h3 align="center">语音播报功能：</h3>
            <p>
                <textarea rows="15" class="_play" v-model="plays"></textarea>
            </p>
            <p>
                <label>选择播报语言：</label>
                <select id="voiceSelect" @click="play"></select>
            </p>
            <button class="_search" @click="play">开始</button>
            <button @click="resume">继续</button>
            <button @click="pause">暂停</button>
            <button @click="cancel">清除队列</button>
        </article>
    </div>
</template>
	<style>
article {
    margin: 0 auto;
    max-width: 800px;
    text-align: center;
}

textarea {
    max-width: 600px;
    width: 100%;
    text-align: left;
}

button {
    border-radius: 3px;
    border: 1px solid #dddddd;
    height: 30px;
    width: 80px;
    cursor: pointer;
}
</style>
        <script>

export default {
    data() {
        return {
            plays: '',
            to_speak: null,
            dataName: null,
            voices: []
        }
    },
    created() {
            this.to_speak = window.speechSynthesis,
            this.dataName, this.voiceSelect = document.querySelector("#voiceSelect");
    },
    mounted() {
        setTimeout(()=> {
            this.populateVoiceList();
        }, 0)
    },
    methods: {
        play() {
            this.cancel();
            this.to_speak = new SpeechSynthesisUtterance(this.plays);

            //to_speak.rate = 1.4;// 设置播放语速，范围：0.1 - 10之间

            // var selectedOption = this.voiceSelect.selectedOptions[0].getAttribute('data-name');
            // console.log(selectedOption);
            // for (let i = 0; i < this.voices.length; i++) {
            //     if (this.voices[i].name === selectedOption) {
            //         this.to_speak.voice = this.voices[i];
            //     }
            // }

            window.speechSynthesis.speak(this.to_speak);
        },
        pause() {
            window.speechSynthesis.pause();
        },
        resume() {
            window.speechSynthesis.resume(); //继续
        },
        cancel() {
            window.speechSynthesis.cancel();
        },
        populateVoiceList() {
            this.voices = speechSynthesis.getVoices();
            console.log(this.voices);
            for (var i = 0; i < this.voices.length; i++) {
                var option = document.createElement('option');
                option.textContent = this.voices[i].name + ' (' + this.voices[i].lang + ')';

                if (this.voices[i].default) {
                    option.textContent += ' -- DEFAULT';
                }
                option.setAttribute('data-lang', this.voices[i].lang);
                option.setAttribute('data-name', this.voices[i].name);
                this.voiceSelect.appendChild(option);
            }
        }
    },

}
</script>