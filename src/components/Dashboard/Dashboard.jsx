import css from "./Dashboard.module.css"

const Dashboard = () => {
    return (
        <div className={css["c-grid"]}>
            <div className={css["c-col-1"]}>Logo</div>
            <div className={css["c-col-2"]}>Logo</div>
        </div>
    )
}

export default Dashboard