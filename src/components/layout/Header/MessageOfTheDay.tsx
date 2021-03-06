import * as React from "react"
import { useContext, useEffect } from "react"
import { Fade } from "react-awesome-reveal"
import { useCookies } from "react-cookie"
import Constants from "../../../constants/Constants"
import { ThemeContext } from "../../../context/theme/ThemeContext"
import { colorizeStringBySeparator } from "../../../utils/colorizeStringBySeparator"

export function MessageOfTheDay() {
    const [cookies, setCookies] = useCookies([
        Constants.MESSAGE_OF_THE_DAY_INDEX_COOKIE_KEY,
    ])
    const { themeBodyClass } = useContext(ThemeContext)

    const messagesOfTheDay = [
        "💯 make strong types great again! 💯",
        "👨‍💻👩‍💻 because somebody has to! 👨‍💻👩‍💻",
        "💻 recursively recurring 💻",
        "🐵 code monkey 🐵",
        "🚀 my terminals are burnin'! 🚀",
        "⏫ stacking the full stack ⏫",
        "💥 bashing the bash [~]$> 💥",
        "🍻 enjoy & cheers! 🍻",
        "🤔 what's a software? 🤔",
        "🤓 sir, best framework? 🤓",
    ]

    useEffect(() => {
        if (!cookies[Constants.MESSAGE_OF_THE_DAY_INDEX_COOKIE_KEY]) {
            setCookies(
                Constants.MESSAGE_OF_THE_DAY_INDEX_COOKIE_KEY,
                Math.floor(Math.random() * messagesOfTheDay.length),
                { path: "/" }
            )
        } else {
            // get next index in circular fashion (appearing to be random but guaranteed always new)
            const circularIndex =
                parseInt(
                    cookies[Constants.MESSAGE_OF_THE_DAY_INDEX_COOKIE_KEY]
                ) +
                    1 >=
                messagesOfTheDay.length
                    ? 0
                    : parseInt(
                          cookies[Constants.MESSAGE_OF_THE_DAY_INDEX_COOKIE_KEY]
                      ) + 1
            setCookies(
                Constants.MESSAGE_OF_THE_DAY_INDEX_COOKIE_KEY,
                circularIndex,
                {
                    path: "/",
                }
            )
        }
        // We want this effect to truly only run once on mount (when page renders)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <h3
            style={{
                marginBottom: 0,
                marginTop: 0,
                position: `relative`,
                textAlign: `center`,
                zIndex: 10,
            }}
            className="message-of-the-day"
        >
            <span className="monokaiRedFont">{"-"}</span>
            <span className="monokaiOrangeFont">{"~"}</span>
            <span className="monokaiBlueFont">{"{"}</span>
            <span className="monokaiGreenFont">{"/"}</span>
            <span className="monokaiYellowFont">{"* "}</span>
            <Fade
                        triggerOnce={true}

                cascade={true}
                damping={0.05}
                duration={1300}
                direction="left"
                style={{ display: "inline", whiteSpace: "inherit" }}
            >
                {colorizeStringBySeparator(
                    themeBodyClass,
                    messagesOfTheDay[
                        cookies[Constants.MESSAGE_OF_THE_DAY_INDEX_COOKIE_KEY]
                    ],
                    "",
                    0,
                    true
                )}
            </Fade>
            <span className="monokaiYellowFont">{" *"}</span>
            <span className="monokaiGreenFont">{"/"}</span>
            <span className="monokaiBlueFont">{"}"}</span>
            <span className="monokaiOrangeFont">{"~"}</span>
            <span className="monokaiRedFont">{"-"}</span>
        </h3>
    )
}
