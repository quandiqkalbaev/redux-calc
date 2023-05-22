import {useDispatch, useSelector} from "react-redux"
import {loadAns, loadBackspace, loadButtons, loadClear} from "../../redux/calculatorRedux/calculator.actions";
import {CALCULATOR_KEY} from "../../redux/calculatorRedux/calculator.reducer";
import {RootState} from "../../redux/calculatorRedux/calculator.actionTypes";

export default function CalcApp() {
    const dispatch = useDispatch();
    const viewCalculator = useSelector((state:any) => {
        return state[CALCULATOR_KEY]
    })
    return (
        <div className="calc">

            {/* //screen */}
            <div className="calc__wrapper">
                <input className="calc__display"
                       type="text"
                       placeholder="0"
                       value={(viewCalculator.ans).length === 0 ? viewCalculator.number : viewCalculator.ans}
                />

                {/* keypad */}

                <div className="calc__keypad">
                    <button onClick={() => dispatch(loadClear())} className="calc__keypad-key calc__keypad-white">AC
                    </button>
                    <button onClick={() => dispatch(loadBackspace())}
                            className="calc__keypad-key calc__keypad-white">C
                    </button>
                    <button onClick={() => dispatch(loadButtons('%'))}
                            className="calc__keypad-key calc__keypad-white">%
                    </button>
                    <button onClick={() => dispatch(loadButtons('+'))}
                            className="calc__keypad-key calc__keypad-orange">+
                    </button>

                    <button onClick={() => dispatch(loadButtons(7))} className="calc__keypad-key">7</button>
                    <button onClick={() => dispatch(loadButtons(8))} className="calc__keypad-key">8</button>
                    <button onClick={() => dispatch(loadButtons(9))} className="calc__keypad-key">9</button>
                    <button onClick={() => dispatch(loadButtons('-'))}
                            className="calc__keypad-key calc__keypad-orange">-
                    </button>

                    <button onClick={() => dispatch(loadButtons(4))} className="calc__keypad-key">4</button>
                    <button onClick={() => dispatch(loadButtons(5))} className="calc__keypad-key">5</button>
                    <button onClick={() => dispatch(loadButtons(6))} className="calc__keypad-key">6</button>
                    <button onClick={() => dispatch(loadButtons('*'))}
                            className="calc__keypad-key calc__keypad-orange">*
                    </button>


                    <button onClick={() => dispatch(loadButtons(1))} className="calc__keypad-key">1</button>
                    <button onClick={() => dispatch(loadButtons(2))} className="calc__keypad-key">2</button>
                    <button onClick={() => dispatch(loadButtons(3))} className="calc__keypad-key">3</button>
                    <button onClick={() => dispatch(loadButtons('/'))}
                            className="calc__keypad-key calc__keypad-orange">/
                    </button>

                    <button onClick={() => dispatch(loadButtons('.'))} className="calc__keypad-key">.</button>
                    <button onClick={() => dispatch(loadButtons(0))} className="calc__keypad-key">0</button>
                    <button onClick={() => dispatch(loadAns())} className="calc__keypad-key calc__keypad-equal">=
                    </button>

                </div>
            </div>
        </div>
    )
}