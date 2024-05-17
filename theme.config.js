const YEAR = new Date().getFullYear();

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Eric Contreras
        <a href="mailto:contreraseric40@gmail.com">Email</a>
        <a href="https://github.com/econtr">GitHub</a>
        <a href="https://www.linkedin.com/in/econtr/">LinkedIn</a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          margin-left: 0.4rem;
          float: right;
        }
      `}</style>
    </footer>
  ),
};
