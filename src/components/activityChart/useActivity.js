/**
 * Custom tooltip of BarChart
 * @param {String} tick data datas
 * @returns {String} tick formatted as day date
 */
export const formatXAxis = (tick) => {
    tick = tick.slice(9)
    return tick
}