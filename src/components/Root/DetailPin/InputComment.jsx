import { useCommentPin } from '../../../hooks/usePins.jsx'
import { useAuth } from '../../../hooks/useAuth.jsx'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Input } from '../../ui/Input.jsx'

export function InputComment() {

  const { id } = useParams()
  const { user } = useAuth()

  
  const commentMutation = useCommentPin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target.elements
    const commentValue = form.comment;
    try {

        const newComment = {
            userId : user._id,
            comment : commentValue.value
        }

       await commentMutation.mutateAsync({ pinId : id, newComment })

    } catch (error) {
        console.log(error)
        toast.error('Algo salio mal en el servidor')
    } finally {

        commentValue.value = '';
    }

  }


  return (
    <form onSubmit={handleSubmit} className='w-full'>
        <Input 
            type='text'
            name='comment'
            placeholder='Agregar un comentario'
         />
    </form>
  )
}
