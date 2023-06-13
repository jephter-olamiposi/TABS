
const info=[
    {
        title:'Full Stack Web Developer',
        name:'TOMMY',
        date:'December 2015 - Present',
        icon:'<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="job-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path></svg>',
        firstText:'<p>Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.</p>',
        secondText:'<p>Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.</p>',
        thirdText:'<p>Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.</p>'
    },
    {
        title:'Front-End Engineer',
        name:'BIGDROP',
        date:'May 2015 - December 2015',
        icon:'<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="job-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path></svg>',
        firstText:'<p>Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid.</p>',
        secondText:'<p>Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester</p>',
        thirdText:'<p>Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1</p>'

    },
    {
        title:'Full Stack Web Developer',
        name:'TOMMY',
        date:'December 2015 - Present',
        icon:'<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="job-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path></svg>',
        firstText:'<p>Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.</p>',
        secondText:'<p>Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.</p>',
        thirdText:'<p>Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.</p>'
    }
]

let tommy = document.querySelector(".t");
let bigdrop = document.querySelector(".b");
let cuker = document.querySelector(".c");


document.querySelector('.info').innerHTML = `
<div class="job-info">
    <h3>${info[0].title}</h3>
    <span class="job-company">${info[0].name}</span>
    <p class="job-date">${info[0].date}</p>
    <div>
        <div class="job-desc">
        ${info[0].icon}
        ${info[0].firstText}
        </div>
        <div class="job-desc">
        ${info[0].icon}
        ${info[0].secondText}
        </div>
        <div class="job-desc">
        ${info[0].icon}
        ${info[0].thirdText}
        </div>

    </div>
</div>`
tommy.classList.add('active');






tommy.addEventListener('click',() => {
        document.querySelector('.info').innerHTML = `
    <div class="job-info">
        <h3>${info[0].title}</h3>
        <span class="job-company">${info[0].name}</span>
        <p class="job-date">${info[0].date}</p>
        <div>
            <div class="job-desc">
            ${info[0].icon}
            ${info[0].firstText}
            </div>
            <div class="job-desc">
            ${info[0].icon}
            ${info[0].secondText}
            </div>
            <div class="job-desc">
            ${info[0].icon}
            ${info[0].thirdText}
            </div>

        </div>
    </div>`;
    tommy.classList.add('active');
    bigdrop.classList.remove('active');
    cuker.classList.remove('active');


});

bigdrop.addEventListener('click',() => {
    document.querySelector('.info').innerHTML = `
        <div class="job-info">
            <h3>${info[1].title}</h3>
            <span class="job-company">${info[1].name}</span>
            <p class="job-date">${info[1].date}</p>
            <div>
                <div class="job-desc">
                ${info[1].icon}
                ${info[1].firstText}
                </div>
                <div class="job-desc">
                ${info[1].icon}
                ${info[1].secondText}
                </div>
                <div class="job-desc">
                ${info[1].icon}
                ${info[1].thirdText}
                </div>
                <div class="job-desc">
                ${info[1].icon}
                ${info[1].thirdText}
                </div>
        
            </div>
        </div>`;
        tommy.classList.remove('active');
        bigdrop.classList.add('active');
        cuker.classList.remove('active');



});
cuker.addEventListener('click',() => {
    document.querySelector('.info').innerHTML = `
        <div class="job-info">
            <h3>${info[2].title}</h3>
            <span class="job-company">${info[2].name}</span>
            <p class="job-date">${info[2].date}</p>
            <div>
                <div class="job-desc">
                ${info[2].icon}
                ${info[2].firstText}
                </div>
                <div class="job-desc">
                ${info[2].icon}
                ${info[2].secondText}
                </div>
                <div class="job-desc">
                ${info[2].icon}
                ${info[2].thirdText}
                </div>
        
            </div>
        </div>`;
        tommy.classList.remove('active');
        bigdrop.classList.remove('active');
        cuker.classList.add('active');


});


