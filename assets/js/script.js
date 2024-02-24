var btnAbouts = document.getElementsByClassName('btn_about');
var contentTabs = document.getElementsByClassName('content_tab');

const openTab = (namaTab) => {
    for(btn of btnAbouts){
        btn.classList.remove('active_btn');
    }
    for(tab of contentTabs){
        tab.classList.remove('active_content');
    }
    event.currentTarget.classList.add('active_btn');
    document.getElementById(namaTab).classList.add('active_content')
}
