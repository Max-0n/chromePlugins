if (/tabfil/.test(window.location.origin)) {
  try {
    document.getElementById('vid_vpaut_div').remove();
  } catch(error) {
    console.error('#vid_vpaut_div not found', error);
  }
}
