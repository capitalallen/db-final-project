import React, { useState, useRef, useCallback } from 'react'
import { Icon } from '@material-ui/core'
import TouchRipple from '@material-ui/core/ButtonBase'
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { useEffect } from 'react'
import clsx from 'clsx'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    expandIcon: {
        transition: 'transform 0.3s cubic-bezier(0, 0, 0.2, 1) 0ms',
        transform: 'rotate(90deg)',
    },
    collapseIcon: {
        transition: 'transform 0.3s cubic-bezier(0, 0, 0.2, 1) 0ms',
        transform: 'rotate(0deg)',
    },
    'expansion-panel': {
        overflow: 'hidden',
        transition: 'max-height 0.3s cubic-bezier(0, 0, 0.2, 1)',
    },
    highlight: {
        background: palette.primary.main,
    },
    navItem: {
        // color: palette.type === "dark" ? palette.text.secondary : "inherit",
        '&:hover': {
            backgroundColor: palette.action.hover,
        },
    },
    compactNavItem: {
        width: 44,
        overflow: 'hidden',
        justifyContent: 'center !important',
        '& $itemText': {
            display: 'none',
        },
        '& $itemIcon': {
            display: 'none',
        },
    },
    itemIcon: {},
    itemText: {
        fontSize: '0.875rem',
        paddingLeft: '0.8rem',
    },
    bulletIcon: {
        background: palette.text.secondary,
    },
}))

const MatxVerticalNavExpansionPanel = ({ item, children, mode }) => {
    const [collapsed, setCollapsed] = useState(false)
    const classes = useStyles()
    const elementRef = useRef(null)
    const componentHeight = useRef(0)
    const { pathname } = useLocation()
    const { name, icon, iconText, badge } = item

    const handleClick = () => {
        componentHeight.current = 0
        calcaulateHeight(elementRef.current)
        setCollapsed(!collapsed)
    }

    const calcaulateHeight = useCallback((node) => {
        if (node.name !== 'child') {
            for (let child of node.children) {
                calcaulateHeight(child)
            }
        }

        if (node.name === 'child') componentHeight.current += node.scrollHeight
        else componentHeight.current += 44 //here 44 is node height
        return
    }, [])

    useEffect(() => {
        if (!elementRef) return

        calcaulateHeight(elementRef.current)

        // OPEN DROPDOWN IF CHILD IS ACTIVE
        for (let child of elementRef.current.children) {
            if (child.getAttribute('href') === pathname) {
                setCollapsed(false)
            }
        }
    }, [pathname, calcaulateHeight])

    return (
        <div>

            <div
                ref={elementRef}
                className={clsx(classes['expansion-panel'], 'submenu')}
            >
                {children}
            </div>
        </div>
    )
}

export default MatxVerticalNavExpansionPanel
