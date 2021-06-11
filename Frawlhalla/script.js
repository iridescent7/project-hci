function toggleDropdown() {
    dropdownContent = $('.dropdown-content')

    if (dropdownContent.css('display') === 'none')
        dropdownContent.css({ 'display' : 'block' })
    else
        dropdownContent.css({ 'display' : 'none' })
}
