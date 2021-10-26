if (/tabfil/.test(window.location.origin)) {
  try {
    document.getElementById('vid_vpaut_div').remove();
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
