// Put your application javascript here
if (document.getElementById('sort_by') != null) {
   
    document.querySelector('#sort_by').addEventListener('change', (e) => {
      var url = new URL(window.location.href)
      url.searchParams.set('sort_by', e.currentTarget.value)
  
      window.location = url.href
    })
  }

  
  
