import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export const ButtonDeleteMonthlyBalance = ( { uuid, deleteRegistry, disabled, text, className } ) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const handleClick = () => {
	deleteRegistry(uuid)
	toggle()
  }

  return (
    <div>
		<Button color="danger" outline={true} disabled={disabled} onClick={toggle} className={className}>{text}</Button>
		<Modal isOpen={modal} toggle={toggle}>
			<ModalHeader toggle={toggle}>Are you sure?</ModalHeader>
			<ModalBody>
				Are you sure you want to delete this registry?
			</ModalBody>
			<ModalFooter>
				<Button color="info" outline={true} onClick={toggle}>Cancel</Button>
				<Button color="danger" outline={true} onClick={handleClick}>Delete</Button>
			</ModalFooter>
		</Modal>
    </div>
  )
}

ButtonDeleteMonthlyBalance.propTypes = {
	uuid: PropTypes.string.isRequired,
	deleteRegistry: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
	className: PropTypes.string,
	text: PropTypes.string.isRequired
}