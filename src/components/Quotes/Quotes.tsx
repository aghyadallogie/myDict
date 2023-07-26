import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { Navigate } from "react-router-dom";
import { userActions } from "../../store/actions";
import { bindActionCreators } from "redux";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

export const Quotes: FC = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.authenticatedUser.user);
    const { loadQuoteAction } = bindActionCreators(
        userActions,
        dispatch
    );

    useEffect(() => {
        loadQuoteAction()
    }, []);

    const { saying } = useSelector((state: RootState) => state.quote)
    if (!user.id) return <Navigate to="/" />;

    return (<>
        <div
            style={{
                color: "#2225",
                display: "flex",
                flexDirection: "column",
                padding: '2rem 0'
            }}
            >
            <ImQuotesLeft size={"2.5rem"} />
            <h5
                style={{
                    color: "#2229",
                    margin: "2rem 1rem",
                    textAlign: "center",
                    fontWeight: 400,
                    fontSize: '1.7rem',
                    fontStyle: 'italic'
                }}
            >
                {saying}
            </h5>
            <ImQuotesRight size={"2.5rem"} style={{ alignSelf: 'flex-end' }} />
        </div>
    </>)
}