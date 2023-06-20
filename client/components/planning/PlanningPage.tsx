import { useRouter } from 'next/router'
import React, { useState } from 'react'
import service from '../../services/service'
import Container from '../container'
import IssueSection from './issue/IssueSection.component'
import TasksSection from './tasks/TasksSection.component'
import { pagePadding } from '../common/common'
import Alert from '../banners/Alert'
import Greeting from './greeting/Greeting.component'
import ButtonPrimary from '../forms/buttons/ButtonPrimary'
import ButtonLink from '../forms/buttons/ButtonLink'

const PlanningPage = () => {
  const router = useRouter()
  const [error, setError] = useState('')
  const [showTasks, setShowTasks] = useState(false)
  const hasError = error.length > 0

  const handleCompletePlanning = async () => {
    const hasDescription = await service.hasDescription()

    if (hasDescription) {
      setError('')
      router.push('/overview')

      return
    }

    setError('You need to define your task before starting the work session.')
  }

  return (
    <div className={`py-5 ${pagePadding}`}>
      <Container>
        <Greeting />
        <IssueSection />
        <div className={`flex ${!showTasks && 'my-8'}`} role="group">
          {!showTasks && (
            <ButtonLink
              action={() => setShowTasks(!showTasks)}
              text={'Want to add subtasks?'}
            />
          )}
          {showTasks && <TasksSection />}
        </div>

        <div className="inline-flex my-8" role="group">
          <ButtonPrimary
            action={handleCompletePlanning}
            text={'Complete Planning'}
          />
        </div>
        {hasError && (
          <div className="-mt-8 mb-2">
            <Alert style="error">{error}</Alert>
          </div>
        )}
      </Container>
    </div>
  )
}

export default PlanningPage
