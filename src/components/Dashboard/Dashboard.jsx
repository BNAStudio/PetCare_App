import css from "./Dashboard.module.css"

const Dashboard = () => {
    return (
        <div className={css["c-grid"]}>
            <div className={css["c-col-1"]}>
                <div className={css["first-row"]}>
                    <div className={css.logo}>Logo</div>
                    <div className={css.notifications}>alert</div>
                </div>
                <div className={css["second-row"]}>
                    <div className={css.home}>home</div>
                    <div className={css["c-info-1"]}>
                        <div className={css.add}>add pet</div>
                        <div className={css["general-state"]}>state</div>
                    </div>
                </div>
                <div className={css["third-row"]}>
                    <div className={css["css-last-login"]}>last login</div>
                    <div className={css["to-do"]}>to do</div>
                </div>
            </div>

            <div className={css["c-col-2"]}>
                <div className={css["general-data"]}>general data</div>
                <div className={css["c-info-2"]}>
                    <div className={css["user-profile"]}>user profile</div>
                    <div className={css["pet-profile"]}>pet profile</div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard