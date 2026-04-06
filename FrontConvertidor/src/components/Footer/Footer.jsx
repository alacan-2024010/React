import './footer.css'

export const Footer = ({ nombre, apellido, carne }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{nombre} {apellido} - {carne}</p>
      </div>
    </footer>
  )
}


