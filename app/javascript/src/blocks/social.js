export default function() {
  const shareLinks = document.querySelectorAll('[data-share]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const title = document.querySelector('title');
  const shareTitle = ogTitle && ogTitle.content || title && title.text;

  for (const link of shareLinks) {
    const social = link.getAttribute('data-share');

    let url = null;

    if(social === 'fb') {
      url = `https://www.facebook.com/sharer.php?src=sp&u=${location.href}&title=${shareTitle}`;
    } else if(social === 'vk') {
      url = `https://vk.com/share.php?url=${location.href}&title=${shareTitle}`;
    } else if(social === 'tw') {
      url = `https://twitter.com/intent/tweet?text=${shareTitle}&url=${location.href}`;
    }

    if(url) {
      link.setAttribute('href', encodeURI(url));
      link.setAttribute('target', '_blank');
    }
  }
}
