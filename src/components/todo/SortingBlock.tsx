import { Button } from "@mui/material"
import React from "react"
import { FlexContainer } from "../../assets/styles/todo.styles"
import { OUTLINED, SECONDARY } from "../../constants/styles.constants"

const SortingBlock = () => {
    return (
        <FlexContainer>
            <Button variant={OUTLINED} color={SECONDARY}>Show All Tasks</Button>
            <Button variant={OUTLINED} color={SECONDARY}>Show Active Tasks</Button>
            <Button variant={OUTLINED} color={SECONDARY}>Show Completed Tasks</Button>
        </FlexContainer>
    )
}
export default React.memo(SortingBlock)