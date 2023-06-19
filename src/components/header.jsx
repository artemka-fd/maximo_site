import '../App.css'

export default function Header() {
    return(
        <header className='header flex items-center justify-between py-3 px-5 border-b shadow-md'>
          <div className='flex items-center gap-4'>
          <a href="/" className='font-bold text-lg'>Maximo's Poetry</a>
          <a href="">Поезія</a>
          <a href="">Проза</a>
          <a href="">Приколи</a>
          <a href="">Завантажити</a>
          </div>
          <select class="form-select border rounded-full p-1 px-3" aria-label="Default select example">
            <option selected>Українська </option>
            <option value="1">російська 🤢</option>
            <option value="2">српски</option>

          </select>
        </header>
    )
}