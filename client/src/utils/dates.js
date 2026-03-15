const formatTime = (time) => {
    if (!time) return ''
    const [hours, minutes] = time.split(':')
    const hour = parseInt(hours)
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const formattedHour = hour % 12 || 12
    return `${formattedHour}:${minutes} ${ampm}`
}

const formatRemainingTime = (date) => {
    if (!date) return ''
    const eventDate = new Date(date)
    const now = new Date()
    const diff = eventDate - now
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    if (days < 0) return `${Math.abs(days)} days ago`
    if (days === 0) return 'Today'
    return `${days} days away`
}

const formatNegativeTimeRemaining = (remaining, id) => {
    if (remaining && remaining.includes('ago')) {
        const element = document.getElementById(`remaining-${id}`)
        if (element) element.style.color = 'red'
    }
}

export default { formatTime, formatRemainingTime, formatNegativeTimeRemaining }
