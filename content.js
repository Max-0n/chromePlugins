if (/tabfil/.test(window.location.origin)) {
  try {
    document.getElementById('vid_vpaut_div').remove();
    document.getElementsByClassName('wrap')[0].style.width = '100%';
    document.getElementsByClassName('wrap')[0].style.marginTop = 0;
    document.getElementsByClassName('wrap')[0].style.maxWidth = 'none';
    document.getElementsByTagName('header')[0].style.marginTop = 0;
    document.body.style.maxWidth = 'none';
    document.getElementsByClassName('wrap')[0].children[0].style.maxWidth = 'none';
  } catch(error) {
    console.error('#vid_vpaut_div not found', error);
  }

  try {
    [...document.getElementsByClassName('adwise-banner')].forEach(item => { item.remove(); });
  } catch(error) {
    console.error('.adwise-banner', error);
  }
}

// z3.viewlost.life
if (/viewlost/.test(window.location.origin)) {
  try {
    const clearFunc = () => {
      [...document.body.children].forEach(child => {
        if (child.className !== 'wrap') child.remove();
      });
    };
    clearFunc();

    setTimeout(() => { clearFunc(); }, 700);
  } catch(error) {
    console.error('document.body.children not found', error);
  }
}

// vk.com
if (/vk.com/.test(window.location.origin)) {
  try {
    const bgHeaderColor = getComputedStyle(document.body).getPropertyValue('--header_background');
    const bgHeaderColorNew = bgHeaderColor.split('(')[1].split(')')[0].replace(/ /g, '').split(',');

    const header = document.getElementById("page_header_cont");
    header.style.background = `rgba(${bgHeaderColorNew[0]},${bgHeaderColorNew[1]},${bgHeaderColorNew[2]},.7)`;
    header.style.backdropFilter = `blur(7px) saturate(2)`;

    const headerSearchInput = document.getElementById("ts_input");
    headerSearchInput.style.opacity = '.6';

    const headerSearchInputDropDown = document.getElementById("ts_cont_wrap");
    headerSearchInputDropDown.style.background = `rgba(${bgHeaderColorNew[0]},${bgHeaderColorNew[1]},${bgHeaderColorNew[2]},.95)`;

  } catch(error) {
    console.error('VK update header issue', error);
  }
}

// Jira darkTheme (demo)
if (/jira.mts.ru/.test(window.location.origin) || /confluence.cloud.mts.ru/.test(window.location.origin)) {
  try {
    document.head.innerHTML += `
      <style>
        #content, #content img,
        .ajs-layer, .ajs-layer img,
        #create-issue-dialog, #create-issue-dialog img,
        #workflow-transition-61-dialog, #workflow-transition-61-dialog img { filter: invert(1); }
        .aui-header .aui-header-primary > .aui-nav > li > a:not(.aui-button) {
          transition: background-color .1s ease-in-out;
        }
        .aui-header .aui-header-primary > .aui-nav > li > a:not(.aui-button):hover {
          background: rgba(7, 71, 166, .17);
        }
        #header {
          /*filter: invert(1);*/
          position: absolute;
          z-index: 1000000;
          width: 100%;
          background: rgba(7, 71, 166, .35);
          backdrop-filter: blur(7px);
        }
        #header img { filter: initial; }
        #announcement-banner { border: none !important; }
        #header > .aui-header { background: none; border: none !important; }
        #content .aui-sidebar .aui-page-header { margin-top: 55px; }
        #issue-content { padding-top: 40px; }
      </style>
    `;
    window.dispatchEvent(new Event('resize'));
  } catch(error) {
    console.error('Не удалось поменять стили', error);
  }
}
