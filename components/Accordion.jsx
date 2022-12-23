import React from 'react'
import { useState } from 'react'

const Accordion = ({title, content}) => {
const [open, setOpen] = useState(false)
    return (
        <div className="card" onClick={e => setOpen(!open)}>
              <button
                className={`${open?'':'collapsed'} card-header`}
                
                data-toggle="collapse"
                data-target="#collapse0"
                aria-expanded="false"
                aria-controls="collapse0"
              >
                {title}
                <span className="toggle-btn" />
              </button>
              <div
                id="collapse0"
                className={`collapse ${open ?'show':''}` }
                data-parent="#tabContent1"
              >
                <div className="card-body">
                  <p>
                    {
                        content
                    }
                   
                  </p>
                </div>
              </div>
            </div>
  )
}

export default Accordion