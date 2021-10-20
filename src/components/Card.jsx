function Card(props) {
  const { full_name, visibility, created_at, ssh_url, git_url } = props.item;
  return (
    <div className="card col-lg-3 m-2">
      <div className="card-body">
        <h5 className="card-title">{full_name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Crated: {created_at}</h6>
        <p className="card-text">Visibility: {visibility}</p>
        <a href={ssh_url} class="card-link">
          sshurl
        </a>
        <a href={git_url} class="card-link">
          git url
        </a>
      </div>
    </div>
  );
}

export default Card;
