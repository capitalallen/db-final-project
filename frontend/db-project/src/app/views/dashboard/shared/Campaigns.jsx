import React from 'react'
import { SimpleCard, MatxProgressBar } from 'app/components'

const Campaigns = () => {
    return (
        <div>
            <SimpleCard title="Campaigns">
                <small className="text-muted">This Week</small>
                <div className="pt-2" />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Trip Cancellation"
                />
                <div className="py-1" />
                <MatxProgressBar
                    value={45}
                    color="secondary"
                    text="Trip Interruption"
                />
                <div className="py-1" />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Medical Insurance"
                />

                <div className="py-3" />
                <small className="text-muted">This Month</small>
                <div className="pt-2" />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Trip Cancellation"
                />
                <div className="py-1" />
                <MatxProgressBar
                    value={45}
                    color="secondary"
                    text="Trip Interruption"
                />
                <div className="py-1" />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Medical Insurance"
                />

                <div className="py-3" />
                <small className="text-muted">This Year</small>
                <div className="pt-2" />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Trip Cancellation"
                />
                <div className="py-1" />
                <MatxProgressBar
                    value={45}
                    color="secondary"
                    text="Trip Interruption"
                />
                <div className="py-1" />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Medical Insurance"
                />
            </SimpleCard>
        </div>
    )
}

export default Campaigns
